def print_upper_words(words, letters):
    """Prints out all words in uppercase that begin with any of letter in letters"""

    for word in words:
        for l in letters:
            if word.startswith(l):
                print(word.upper())
                break



print_upper_words(['hello','goodbye','see','you','tomorrow'], ['h','g'])