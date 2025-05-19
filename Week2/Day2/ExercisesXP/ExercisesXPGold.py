#Exercise 1: Bank Account
print("--------------Exercise 1--------------")

class BankAccount():
    def __init__(self, balance, username, password):
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = False
    
    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("Accses denied.")
        if amount > 0:
            self.balance += amount
        else:
            raise Exception("Amout for deposit is not positive.")
    
    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("Accses denied.")
        if amount > 0:
            self.balance -= amount
        else:
            raise Exception("Amout for withdraw is not positive.")
    
    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
            return True
        else: return False
        
class MinimumBalanceAccount(BankAccount):
    def __init__(self, balance, username, password, minimum_balance=0):
        super().__init__(balance, username, password)
        self.minimum_balance = minimum_balance
    
    def withdraw(self, amount):
        balance_after_operation -= self.balance - amount
        if balance_after_operation < self.minimum_balance:
            raise Exception("The balance after operation is less than the minimum balance.")
        else: return super().withdraw(amount)
        
class ATM:
    def __init__(self, account_list, try_limit):
        for account in account_list:
            if not isinstance(account, BankAccount):
                raise ValueError("ATM doesn't accept non-BankAccount objects")
        self.account_list = account_list
        
        try:
            if not isinstance(try_limit, (int, float)) or try_limit <= 0:
                raise ValueError("try_limit must be a positive number")
            self.try_limit = try_limit
        except ValueError as e:
            print(f"Invalid try_limit: {e}. Default value will be installed.")
            self.try_limit = 2
        self.current_tries = 0
        self.show_main_menu()
    
    def show_main_menu(self):
        while self.current_tries < self.try_limit:
            username = input("Please input your username: ")
            password = input("Please input your passwor: ")
            if self.log_in(username, password):
                return
            else:
                print(f"Incorrect credentials. Attempts left: {self.try_limit - self.current_tries}")
        print("You have reached the maximum number of tries.")
    
    def show_account_menu(self, account):
        while True:
            print("1 - Deposit\n2 - Withdraw\n3 - Exit")
            choice = input("Your choice: ")
            if choice == '1':
                amount = int(input("Enter amount to deposit: "))
                try:
                    account.deposit(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == '2':
                amount = int(input("Enter amount to withdraw: "))
                try:
                    account.withdraw(amount)
                    print(f"New balance: {account.balance}")
                except Exception as e:
                    print(e)
            elif choice == '3':
                print("Goodbye!")
                break
            else:
                print("Invalid input")
    
    def log_in(self,username,password):
        for account in self.account_list:
            if account.authenticate(username, password):
                self.show_account_menu(account)
                return True
        self.current_tries += 1
        return False


acc1 = BankAccount(1000, "user1", "pass1")
acc2 = MinimumBalanceAccount(500, "user2", "pass2", minimum_balance=100)
atm = ATM([acc1, acc2], try_limit=3)
    
acc1.authenticate("user1", "pass1")
acc1.deposit(100)
print(acc1.balance)
