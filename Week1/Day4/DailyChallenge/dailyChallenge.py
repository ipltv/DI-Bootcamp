#Daily challenge: Solve the Matrix

MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''       

#Transforming the String into a 2D List
#split string by the row anb the by the letters and delete first row as empty.
matrix = [list(row) for row in MATRIX_STR.split('\n')]
matrix.pop(0)
print(*matrix, sep='\n')

#Step 2: Processing Columns
for j in range(len(matrix[0])):
    print(f"----Column {j}----")
    for i in range(len(matrix)):
        print(matrix[i][j])
        
#Step 3: Filtering Alpha Characters
resultString = ""
for j in range(len(matrix[0])):
    for i in range(len(matrix)):
        if str.isalpha(matrix[i][j]):
            resultString += matrix[i][j]
print(resultString)

#Step 4: Replacing Symbols with Spaces
resultString = ""
flagSymbols = False #flag for marking the beginning of non-letter sequences
for j in range(len(matrix[0])):
    for i in range(len(matrix)):
        if str.isalpha(matrix[i][j]): #if symbol is a letter
            if flagSymbols and resultString: #if before there was a sequences of non-letter chars and result string isn't empty (for the case when non-letter is in the beginning) 
                resultString += " "
            resultString += matrix[i][j]
            flagSymbols = False
        else:
            flagSymbols = True #stat non-letter
# Step 5: Print the decoded message     
print(resultString)