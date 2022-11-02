def remove_char(s):
    s = s[1:], s[:-1]
    # ou -- > return s[1 : -1]
    return s

print(remove_char('coffee'))
