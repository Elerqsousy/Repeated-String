def repeatedString(s, n)
    all_a_in_s = s.count('a')
    num_of_repeats = n / s.length
    partial_repeat = n % s.length
    a_in_partial_repeat = s[0, partial_repeat].count('a')
    total_a_count = (num_of_repeats * all_a_in_s) + a_in_partial_repeat
    return total_a_count
end
