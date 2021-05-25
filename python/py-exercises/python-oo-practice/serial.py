"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=100):
        "Creates a new Serial number instance"
        self.start = start
        self.serial = start - 1

    def generate(self):
        """Creates a new serial number"""
        self.serial += 1
        return self.serial

    def reset(self):
        """Resets the serial number back to its starting point"""
        self.serial = self.start - 1


