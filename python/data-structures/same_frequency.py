def frequency_counter(coll):
    '''returns frequency counter mapping of coll.'''

    counts = {}

    for x in coll:
        counts[x] = counts.get(x,0) + 1
    return counts

def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    return frequency_counter(str(num1)) == frequency_counter(str(num2))



