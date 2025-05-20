#Daily Challenge - Circle
import math
import turtle

class Circle:
    """A class representing a geometric circle."""
    def __init__(self, radius=None):
        """
        Initialize a Circle with radius.
        Raises ValueError if None provided.
        """
        if radius is not None:
            self.radius = radius
        else:
            raise ValueError("Radius cannot be None")
        
    @classmethod
    def from_diameter(cls, diameter):
        """Create a Circle instance using the diameter."""
        if not isinstance(diameter, (int,float)) or diameter <= 0:
            raise ValueError("Radius must be a positive number.")
        return cls(diameter/2)
    
    @property
    def radius(self):
        """Get the radius of the circle."""
        return self._radius
    
    @radius.setter
    def radius(self, value):
        """Set the radius of the circle with validation."""
        if not isinstance(value, (int, float)) or value <= 0:
            raise ValueError("Radius must be a positive number.")
        self._radius = value
    
    @property
    def diameter(self):
        """Get the diameter of the circle."""
        return self.radius * 2
    
    @property
    def area(self):
        """Calculate and return the area of the circle."""
        return math.pi * self.radius ** 2

    def __str__(self):
        """Return a readable string representation of the circle."""
        return f"Circle - radius: {self.radius}; area: {self.area}"
    def __repr__(self):
        """Return a developer-friendly string representation."""
        return f"Circle(radius={self.radius})"
    def __add__(self, other):
        """Add two circles and return a new one with combined radius."""
        if not isinstance(other, Circle):
            return NotImplemented
        return Circle(self.radius + other.radius)   
    def __gt__(self, other):
        """Return True if this circle is larger than the other."""
        return self.radius > other.radius
    def __lt__(self, other):
        """Return True if this circle is smaller than the other."""
        return self.radius < other.radius      
    def __eq__(self, other):
        """Return True if the two circles have equal radius."""
        return self.radius == other.radius
    def __ge__(self, other):
        """Return True if this circle is larger or equal than the other."""
        return self.radius >= other.radius
    def __le__(self, other):
        """Return True if this circle is smaller or equal than the other."""
        return self.radius <= other.radius
    
    
c1 = Circle(radius=50)
c2 = Circle.from_diameter(200)#100
c3 = Circle(radius=150)
c4 = Circle.from_diameter(400)

circles = [c1, c2, c3, c4]
sorted_circles = sorted(circles)

print(sorted_circles)


s = turtle.getscreen()
t = turtle.Turtle()
t.up()
t.goto(0,-50)
t.down()

for circle in circles:
    t.circle(circle.radius)
    t.up()
    t.right(90)
    t.forward(50)
    t.left(90)
    t.down()