#Exercise 1 : Student Grade Summary
print("--------------Exercise 1--------------")

#You are given a dictionary containing student names as keys and lists of their grades as values. 
#Your task is to create a summary report that calculates the average grade for each student, assigns a letter grade, and determines the class average.
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
student_letter_grades = {}
for student in student_grades:
    grades = student_grades[student]
    average = sum(grades) / len(grades)
    student_averages[student] = average
    if average >= 90:
        letter_grade = "A"
    elif average >= 80:
        letter_grade = "B"
    elif average >= 70:
        letter_grade = "C"
    elif average >= 60:
        letter_grade = "D"
    else:
        letter_grade = "F"
    student_letter_grades[student] = letter_grade

for student in student_averages:
    print(f"{student}: Average Grade = {student_averages[student]:.2f}, Letter Grade = {student_letter_grades[student]}")

#Exercise 2 : Advanced Data Manipulation and Analysis
print("--------------Exercise 2--------------")

#In this exercise, you will analyze data from a hypothetical online retail company to gain insights into sales trends 
# and customer behavior. The data is represented as a list of dictionaries, where each dictionary contains information 
# about a single purchase.

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

totalSales = {}
for sale in sales_data:
    product = sale['product']
    total_price = sale['price'] * sale['quantity']
    if product not in totalSales:
        totalSales[product] = total_price
    else:
        totalSales[product] += total_price
print(f"Total sales: ${totalSales}") #Output: Total sales: $4350

customerSpendingProfile={}
for sale in sales_data:
    customer_id = sale['customer_id']
    if customer_id not in customerSpendingProfile:
        customerSpendingProfile[customer_id] = 0
    customerSpendingProfile[customer_id] += sale['price'] * sale['quantity']
for customer_id, total_spent in customerSpendingProfile.items():
    print(f"Customer {customer_id} spent a total of ${total_spent}") #Output: Customer 1 spent a total of $2200, Customer 2 spent a total of $2200, Customer 3 spent a total of $850

#Sales Data Enhancement
for sale in sales_data:
    sale['total_price'] = sale['price'] * sale['quantity']

def myFanc(element):
    return element['total_price']
#High-Value Transactions
highValueTransactions = [sale for sale in sales_data if sale['total_price'] > 500]
highValueTransactions.sort(reverse=True, key=myFanc)
for sale in highValueTransactions:
    print(sale)

#Customer Loyalty Identification
cusromerLoyalty = {}
for sale in sales_data:
    customer_id = sale['customer_id']
    if customer_id not in cusromerLoyalty:
        cusromerLoyalty[customer_id] = 0
    cusromerLoyalty[customer_id] += 1
for customer_id, purchase_count in cusromerLoyalty.items():
    if purchase_count > 1:
        print(f"Customer {customer_id} is a loyal customer with {purchase_count} purchases.")
    else:
        print(f"Customer {customer_id} made {purchase_count} purchases.")
    
#Bonus: Insights and Analysis

transactionPerProduct = {}
for sale in sales_data:
    product = sale['product']
    if product not in transactionPerProduct:
        transactionPerProduct.update({product: {'transactionCount': 0, 'quantity': 0, 'totalSales': 0}})
    transactionPerProduct[product]['transactionCount'] += 1
    transactionPerProduct[product]['quantity'] += sale['quantity']
    transactionPerProduct[product]['totalSales'] += sale['total_price']

for product in transactionPerProduct:
    transactionPerProduct[product]['avgTransactionValue'] = transactionPerProduct[product]['totalSales'] / transactionPerProduct[product]['transactionCount']

for product, categoryDetails in transactionPerProduct.items():
    print(f"Category {product} has {categoryDetails['transactionCount']} transactions.  Average transaction value: {categoryDetails['avgTransactionValue']}.")
#Total quantity {categoryDetails['quantity']}. Total ptice: {categoryDetails['totalSales']}.
mostPopularProduct = max(transactionPerProduct, key=lambda x: transactionPerProduct[x]['quantity'])
print(f"Most popular product: {mostPopularProduct} with {transactionPerProduct[mostPopularProduct]['quantity']} units.")


# Calculating the average transaction value for each product category
average_transaction_value = {}
for product in totalSales.keys():
    total_quantity = sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product)
    average_transaction_value[product] = totalSales[product] / total_quantity

# Identifying the most popular product based on the quantity sold
product_quantities = {product: sum(transaction["quantity"] for transaction in sales_data if transaction["product"] == product) for product in set(transaction["product"] for transaction in sales_data)}
most_popular_product = max(product_quantities, key=product_quantities.get)

# Insights into how these analyses could inform the company's marketing strategies
"""
Insights:
1. Products with higher average transaction values might indicate premium pricing or higher-end products. Marketing strategies could focus on highlighting the quality and features of these products to attract customers willing to pay more.

2. The most popular product, based on quantity sold, indicates consumer preference and demand. Marketing strategies could include promoting this product more aggressively, bundling it with other products, or exploring ways to upsell customers to higher-value items related to the most popular product.

3. Understanding both the average transaction value and the most popular products can help in inventory management, targeting advertising campaigns, and developing promotions that drive sales in specific product categories.
"""

print("Average Transaction Value:", average_transaction_value)
print("Most Popular Product:", most_popular_product)