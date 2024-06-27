# Students Full Name
# Monday June 24, 2024

print("Welcome to Python")

# declaring variables
    # numerical values
num1 = 12
num2 = -9
sum = num1 + num2
# String
fullname = "Peter Pan"
#boolean
checkmood = True

# print variables and string in one print

print(f"Welcome to Python {fullname}. The sum of {num1} and {num2} is {sum}")


#collect the data from the keyboard
h = float(input("Enter a height: "))
w = float(input("Enter a width: "))
#calculate the hypotenuse
hyp =( h**2 + w**2)**0.5
# " ** " means the power of 2
hyp = round(hyp,2)

print(f"The collected height is {h} and width is {w}. The calculated hypotenuse is {hyp}")

# EXAMPLE OF STRINGS

msg = "Hello World!"
lengthmsg = len(msg)
check1 =  "m" in msg
check2 = "o" in msg

print(f"The message has {lengthmsg} characters. ")
print(f"The character in index 6 is {msg[6]}")
print(f"Is letter 'm' in msg? {check1}")
print(f"Is letter 'o' in msg? {check2}")


# EXAMPLE 3: CONTROL FLOW
 # CHECK IF SOMEONE'S AGE IS GREATER THAN OR EQUAL TO 21

 age = 19 
 if age >=21:
     print("Your are an adult")
     else:
    print("You are underage") 
    # need to fix later 

# EXAMPLE CONTROL FLOW (GPA)

grade1 = float(input("Enter grade 1: "))
grade2 = float(input("Enter grade 2: "))

average = (grade1 + grade2)/2

if average >=90 and average <=100:
    GPA = "A"
elif average>=80 and average<=89.99:
    GPA = "B"
elif average>=70 and average<=79.99:
    GPA = "C"
elif average>=60 and average<=69.99:
    GPA = "D"
elif average>100:
    GPA = "UNDEFINED"
else:
    GPA = "F"

print(f"The average grade is {average} with a gpa of {GPA} ")

# EXAMPLE 5: FOR LOOP
    # print from 0 to 5, exclusive(meaning not including the 5 in the loop count)
for x in range(0,5)
    print(x)

# EXAMPLE 6: FOR LOOP FROM -3 TO 3
    # print from -3 to 3
for m in range(-3,4)
    print(m)

# EXAMPLE 7: FOR LOOP FROM 9 TO 0
    # print from 9 to 1
for n in range(9,0,-2)
    print(n)

# EXAMPLE 8: FOR LOOP IN A LIST

animals = ["fish", "cat", "dog"]
for pet in animals:
    print(pet)

# EXAMPLE 9: WHILE LOOP
    # print from 1 to 5 
n = 1
while n<=5:
    print(n)
    if n ==3:
        break
    else:
        print("End of program")