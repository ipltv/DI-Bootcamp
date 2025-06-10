    const toElement = document.getElementById("to");
    const fromElement = document.getElementById("from");
    const amountElement = document.getElementById("amount");
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
    const convertBtn = document.getElementById("convert");
    const switchBtn = document.getElementById("switch");

    function displayErrorMessage(error) {
      errorElement.innerText = error;
    }

    function removeErrorMessage() {
      errorElement.innerText = "";
    }

    function getCodesURL() {
      return `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
    }

    function getPairRateURL(base, target) {
      return `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${base}/${target}`;
    }

    async function exchangerateapi(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Request is not succsessful.");
        }
        let data = await response.json()
        return data;
      } catch (error) {
        displayErrorMessage(error);
      }
    }

    function displayCurrencyOptions(data) {
      for (let item of data.supported_codes) {
        const optionElement = document.createElement("option");
        const currencyCode = item[0];
        const currencyName = item[1];
        optionElement.setAttribute("value", currencyCode);
        optionElement.innerText = currencyCode + " - " + currencyName;

        const optionElementClone = optionElement.cloneNode(true);

        fromElement.appendChild(optionElement);
        toElement.appendChild(optionElementClone);
      }
    }

    async function convertCurrency() {
      removeErrorMessage();

      const base = fromElement.value;
      const target = toElement.value;
      const amount = parseFloat(amountElement.value);
      if (isNaN(amount) || amount <= 0) {
        displayErrorMessage("Please enter a valid amount (a positive number).");
        return;
      }

      try {
        const exchangeData = await exchangerateapi(getPairRateURL(base, target));

        if (!exchangeData || typeof exchangeData.conversion_rate === 'undefined') {
          if (!errorElement.innerText) {
            displayErrorMessage("Could not retrieve exchange rate data.");
          }
          resultElement.innerText = "--";
          return;
        }

        const exchangeRate = exchangeData.conversion_rate;
        const resultAmount = (amount * exchangeRate).toFixed(4);
        resultElement.innerText = `${amount} ${base} = ${resultAmount} ${target}`;
      }
      catch (error) {
        displayErrorMessage(`Conversion error: ${error}`);
        resultElement.innerText = "--";
      }
    }

    async function init() {
      try {
        switchBtn.disabled = true;
        convertBtn.disabled = true;
        const currencyData = await exchangerateapi(getCodesURL());
        console.log(currencyData);
        if (!currencyData?.supported_codes) {
          throw new Error("Incomplete data received");
        }
        displayCurrencyOptions(currencyData);
      } catch (error) {
        displayErrorMessage(`Initialization error: ${error.message}`);
      } finally {
        switchBtn.disabled = false;
        convertBtn.disabled = false;
      }
    }

    init();
    convertBtn.addEventListener("click", () => {
      try {
        convertCurrency();
      } catch (error) {
        displayErrorMessage(error)
      }
    })

    switchBtn.addEventListener("click", () => {
      try {
        const tempFromValue = fromElement.value;
        fromElement.value = toElement.value;
        toElement.value = tempFromValue;
        convertCurrency();
      } catch (error) {
        displayErrorMessage(error);
      }
    })