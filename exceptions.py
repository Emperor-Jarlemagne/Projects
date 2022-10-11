
#import built in return or error messages
import sys 


# catch errors if input is a string
try:
    x = int(input("x: "))
    y = int(input("y: "))
except ValueError:
    print("Error: Invlaid Input")
    sys.exit(1)

#Catch errors if error is 0
try:
    result = x/y
except ZeroDivisionError:
    print("Error: Cannot Divide By 0")
    sys.exit(1)


print(f"{x} / {y} = {result}")