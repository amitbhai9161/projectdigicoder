import turtle

# Create a new turtle screen and set its background color
screen = turtle.Screen()
screen.bgcolor("white")

# Create a new turtle object
my_turtle = turtle.Turtle()

# Draw a red heart
my_turtle.fillcolor("red")
my_turtle.begin_fill()
my_turtle.circle(100)
my_turtle.end_fill()

# Move the turtle to a new position
my_turtle.penup()
my_turtle.goto(-100, 0)
my_turtle.pendown()

# Draw a red heart
my_turtle.fillcolor("blue")
my_turtle.begin_fill()
for _ in range(4):
    my_turtle.forward(100)
    my_turtle.right(90)
my_turtle.end_fill()

# Keep the window open
turtle.done()