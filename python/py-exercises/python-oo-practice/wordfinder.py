import random

"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    """Machine to find random words for a specific filepath

    >>> wf = WordFinder('wordfinder_test.txt')
    5 words read
    
    >>> wf.random() in ['this', 'is', 'a', 'test', 'file']
    True

    >>> wf.random() in ['this', 'is', 'a', 'test', 'file']
    True

    >>> wf.random() in ['this', 'is', 'a', 'test', 'file']
    True
    """

    def __init__(self, filepath):
        reference_file = open(filepath)
        self.words = self.parse(reference_file)
        print(f"{len(self.words)} words read")


    def parse(self, reference_file):
        return[l.strip() for l in reference_file]
    
    def random(self):
        return random.choice(self.words)
        

    

class SpecialWordFinder(WordFinder):
    """Machine to find random words from a specific filepath where the file contains lines with no text 

    >>> wf = SpecialWordFinder('specialwordfinder_test.txt')
    5 words read
    
    >>> wf.random() in ['this', 'is', 'a', 'specialwordfinder', 'test']
    True

    >>> wf.random() in ['this', 'is', 'a', 'specialwordfinder', 'test']
    True

    >>> wf.random() in ['this', 'is', 'a', 'specialwordfinder', 'test']
    True
    """

    def parse(self, reference_file):
        return[l.strip() for l in reference_file if l.strip() and not l.startswith('#')]



