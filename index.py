space= int(input("space: "))
num1 = int(input("1:"))
num2 = int(input("2:"))
num3 = int(input("3:"))
num4 = int(input("4:"))
num5 = int(input("5:"))
if((num1 , num2 , num3 , num4 , num5) == 2):
 print("{}{}{}".format(num1, "-"*space,num2))
 print("{}{}{}".format("-"*((space//2)+1), num3, "-"*((space//2)+1)))
 print("{}{}{}".format(num4, "-"*space, num5))
else:
 print("numbers incorrect")