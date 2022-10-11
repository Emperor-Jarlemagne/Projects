
def announce(f):
    def wrapper():
        print("About to Run Function")
        f()
        print("Done with Function")
    return wrapper

# "@" symbol uses the decorator function from above
@announce
def hello():
    print("hello world")
