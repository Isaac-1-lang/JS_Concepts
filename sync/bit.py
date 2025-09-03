def twos_complement_to_decimal(binary_str):
    """
    Convert a two's complement number to decimal by performing ones' complement and adding 1
    
    Args:
    binary_str (str): A binary string in two's complement representation
    
    Returns:
    int: The decimal equivalent of the number
    """
    # Check if it's a negative number (first bit is 1)
    if binary_str[0] == '1':
        # Step 1: Perform ones' complement (invert all bits)
        ones_complement = ''.join('1' if bit == '0' else '0' for bit in binary_str)
        
        # Step 2: Add 1 to get two's complement
        # Convert to list for easier manipulation
        ones_complement_list = list(ones_complement)
        
        # Add 1 from the right
        for i in range(len(ones_complement_list) - 1, -1, -1):
            if ones_complement_list[i] == '0':
                ones_complement_list[i] = '1'
                break
            else:
                ones_complement_list[i] = '0'
        
        # Convert back to string
        twos_complement = ''.join(ones_complement_list)
        
        # Convert to decimal and make negative
        decimal = -int(twos_complement, 2)
    else:
        # Positive numbers are converted directly
        decimal = int(binary_str, 2)
    
    return decimal

# Demonstration function
def demonstrate_conversion():
    print("Two's Complement to Decimal Conversion Examples:")
    
    # Positive number
    print("\nPositive Number:")
    pos_binary = '0101'
    print(f"{pos_binary} → {twos_complement_to_decimal(pos_binary)}")
    
    # Negative numbers
    print("\nNegative Numbers:")
    # Examples of different negative numbers
    neg_examples = ['1011', '1000', '11110110']
    for binary in neg_examples:
        print(f"{binary} → {twos_complement_to_decimal(binary)}")

# Run the demonstration
demonstrate_conversion()