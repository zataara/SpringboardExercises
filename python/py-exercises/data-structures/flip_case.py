def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    letter = to_swap.lower()
    new_word = ''

    for ltr in phrase:
        if ltr.lower() == letter:
            ltr = ltr.swapcase()
        new_word += ltr

    return new_word
        

