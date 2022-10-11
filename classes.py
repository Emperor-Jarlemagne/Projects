#This is an example showing how to define classes and reference the "self" of the object
# In this case "Point" - showing two points within the class
# and "Flight" showing the capacity (int) of an airplane flight
class Point():
    def __init__(self, input1, input2):
        self.x = input1
        self.y = input2

p = Point(2, 8)

print(p.x)
print(p.y)

# Use the function to program a flight app to book passengers to flight capacity
class Flight():
    def __init__(self, capacity):
        self.capacity = capacity
        self. passengers = []

#Add Passenger to the flight
    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True

# Make sure there are available seat son the flight
    def open_seats(self):
        return self.capacity - len(self.passengers)


#define how much capacity there is on this flight (in this case it's 3)
flight = Flight(3)

#Example of adding people to the Flights

people = ["Harry", "Ron", "Hermione", "Ginny"]
for person in people:
    if flight.add_passenger(person):
        #The "f" after print is to format the string as a string and adds the variable in {}
        print(f"Added {person} to flight successfully")
    else:
        print(f"No available seats for {person}")