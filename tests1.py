import unittest
from prime import is_prime

class Tests(unittest.TestCase):

    def test1(self):
        #Check that 1 is not prime
        self.assertFalse(is_prime(1))

    def test2(self):
        #Check that 2 is prime
        self.assertTrue(is_prime(2))

    def test11(self):
        #Check that 11 is prime
        self.assertTrue(is_prime(11))
 
    def test25(self):
        #Check that 25 is not prime
        self.assertFalse(is_prime(25))

    def test28(self):
        #Check that 28 is not prime
        self.assertFalse(is_prime(28))

if __name__ == "__main__":
    unittest.main()