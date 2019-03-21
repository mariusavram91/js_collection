function split_messages(string, max_chars) {
    const string_check = string && string != '' && string.length <= 500;
    const max_check = max_chars && max_chars === parseInt(max_chars, 10) &&
        max_chars > 0 && max_chars <= 500;

    if(!string_check || !max_check) {
        return -1;
    }

    if(string.length <= max_check) {
        return 1;
    }

    const words  = string.split(" ");
    let char_count = 0;
    let messages = [];
    let current_message = '';

    for (let i = 0; i < words.length; i++) {
        if(words[i].length > max_chars) {
            return -1;
        }

        if((char_count + words[i].length) <= max_chars) {
            current_message = current_message + words[i] + ' ';
            char_count = char_count + words[i].length + 1;
        } else {
            messages.push(current_message.trim());
            current_message = words[i] + ' ';
            char_count = words[i].length + 1;
        }

        if(i === (words.length -1)) {
            messages.push(current_message.trim());
        }
    }

    console.log(messages)
    console.log(messages.length)

    return message;
}

var string = "Testing messages split in Javascript is fun";
split_messages(string, 20);
