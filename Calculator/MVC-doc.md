# Identifying parts:

**-view** = The calculator, 
**-model** = Arrays and other variables that save data, 
**-controller** = Functions.




View = Make the UI in which the user will be able to interact with the data presented. It should maintain the aspect of a calculator and should be easy to understand.


Model : Create different variables that will help save the inputs made by the user and to save the different operations the user makes.


Controller : Create different functions that will manipulate the data the user inputs(Function for addition, subtraction, multiplication, division, etc).


The task can be divided into smaller tasks to do with view, model or controller.


## **Task Examples:**

### **Calc-8** 
Controller: Have the calculator recognize when there's a button input from the user.


### **Calc-11** 
View: After pressing the button, the user has visual feedback of the button he presses.


### **Calc-12**
Controller: Have the calculator recognize each operator and make a function that decides depending on which operator was pressed what operation will occur.


### **Calc-9**
Model: When one of these operators are imputed (+ ,- ,/ ,*) by the user, update the model of the previous inputs by the user.


### **Calc-14**
Controller: Once the calculator detects the user input “=” from “calc-12”, have a function that operates the equation.


### **Calc-15**
Model: Once the operation is done, update the model to its result.


### **Calc-16**
View: Have the calculator’s display update the result once the model is updated.
