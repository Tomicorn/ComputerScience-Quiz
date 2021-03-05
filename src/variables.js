export const introductionToBinaryQuestions = [
    {
        questionText: 'What is binary?',
        answerOptions: [
            { text: 'A Number system using A-Z, 1-9', isCorrect: false },
            { text: 'A number system using 1-0', isCorrect: true },
            { text: 'A number system using 1-9', isCorrect: false }
        ],
    },
    {
        questionText: 'How many bits is a nibble?',
        answerOptions: [
            { text: '2', isCorrect: false },
            { text: '4', isCorrect: true },
            { text: '8', isCorrect: false }
        ],
    },
    {
        questionText: 'Is binary...',
        answerOptions: [
            { text: 'Base 10?', isCorrect: false },
            { text: 'Base 5?', isCorrect: false },
            { text: 'Base 2?', isCorrect: true }
        ],
    }
];

export const binaryConversionQuestions = [
    {
        questionText: 'What is 75 in binary?',
        answerOptions: [
            { text: '01001011', isCorrect: true },
            { text: '01100011', isCorrect: false },
            { text: '10001001', isCorrect: false }
        ],
    },
    {
        questionText: 'What is 10110101 in Decimal?',
        answerOptions: [
            { text: '101', isCorrect: false },
            { text: '178', isCorrect: false },
            { text: '181', isCorrect: true }
        ],
    },
    {
        questionText: 'In 42 will the last binary digit be a...',
        answerOptions: [
            { text: '2', isCorrect: false },
            { text: '1', isCorrect: false },
            { text: '0', isCorrect: true }
        ],
    }
];

export const binaryAdditionQuestions = [
    {
        questionText: 'What is 101 + 010 in binary?',
        answerOptions: [
            { text: '1011', isCorrect: true },
            { text: '0111', isCorrect: false },
            { text: '0101', isCorrect: false }
        ],
    },
    {
        questionText: 'What is 11100101 + 10101001',
        answerOptions: [
            { text: '1010011010', isCorrect: false },
            { text: '0110001110', isCorrect: true },
            { text: '1111111110', isCorrect: false }
        ],
    },
    {
        questionText: 'How many sums do you need to know to add binary numbers?',
        answerOptions: [
            { text: '2', isCorrect: false },
            { text: '3', isCorrect: false },
            { text: '4', isCorrect: true }
        ],
    }
];

export const ASCIIQuestions = [
    {
        questionText: 'How many bits does ASCII use for one character?',
        answerOptions: [
            { text: '6', isCorrect: false },
            { text: '8', isCorrect: false },
            { text: '7', isCorrect: true }
        ],
    },
    {
        questionText: 'What does ASCII stand for?',
        answerOptions: [
            { text: 'American Standard Code for Information Interchange', isCorrect: true },
            { text: 'African Standard Code for Information Interchange', isCorrect: false },
            { text: 'American Standard Code for Information Interlock', isCorrect: false }
        ],
    },
    {
        questionText: 'What do we use to convert ASCII by hand?',
        answerOptions: [
            { text: 'ASCII spreadsheets', isCorrect: false },
            { text: 'Letter charts', isCorrect: false },
            { text: 'ASCII charts', isCorrect: true }
        ],
    }
];

export const BitmapsQuestions = [
    {
        questionText: 'What are Bitmaps?',
        answerOptions: [
            { text: 'images', isCorrect: true },
            { text: 'videos', isCorrect: false },
            { text: 'sounds', isCorrect: false }
        ],
    },
    {
        questionText: 'What is colour depth?',
        answerOptions: [
            { text: 'The number of bits used to asign a pixel', isCorrect: true },
            { text: 'The number of pixels', isCorrect: false },
            { text: 'The number of colours', isCorrect: false }
        ],
    },
    {
        questionText: 'If a Bitmap is 5 by 5 pixels and has a colour depth of 16 what is its file size?',
        answerOptions: [
            { text: '400 bits', isCorrect: true },
            { text: '500 bits', isCorrect: false },
            { text: '600 bits', isCorrect: false }
        ],
    }
];

export const MagnitudeQuestions = [
    {
        questionText: 'What does Magnitude mean?',
        answerOptions: [
            { text: 'weight', isCorrect: false },
            { text: 'volume', isCorrect: false },
            { text: 'size', isCorrect: true }
        ],
    },
    {
        questionText: 'How many bytes in a Megabyte?',
        answerOptions: [
            { text: '1 million', isCorrect: true },
            { text: 'half a million', isCorrect: false },
            { text: '1 billion', isCorrect: false }
        ],
    },
    {
        questionText: 'How many nibbles in a byte?',
        answerOptions: [
            { text: '1', isCorrect: false },
            { text: '2', isCorrect: true },
            { text: '3', isCorrect: false }
        ],
    }
];

export const HUFFMANCodeQuestions = [
    {
        questionText: 'Why do we use HUFFMAN code?',
        answerOptions: [
            { text: 'To compact our data', isCorrect: true },
            { text: 'To expand our data', isCorrect: false },
            { text: 'To errase our data', isCorrect: false }
        ],
    },
    {
        questionText: 'Does HUFFMAN Code use...',
        answerOptions: [
            { text: '1-9?', isCorrect: false },
            { text: '1-0?', isCorrect: true },
            { text: 'a-z?', isCorrect: false }
        ],
    },
    {
        questionText: 'What do we use to execute HUFFMAN Encoding?',
        answerOptions: [
            { text: 'A tree', isCorrect: true },
            { text: 'A log', isCorrect: false },
            { text: 'A Table', isCorrect: false }
        ],
    }
];

export const binaryConversionDescription =  
    'To convert binary to decimal, put the binary in a table like this:' +
    ' ' +
    'Then, add up the numbers with a 1 under them . '+
    ' ' +
    'To convert Decimal to binary, you use the same table.' +
    'You go along from right to left and think: does [the number in the table] go into [my decimal number].' +
    'If so, put a 1 in the box else, put a 0.' +
    'Then find the subtract and continue.';

export const introductionToBinaryDescription =  
    'Binary is the number system used by computers. It consists of just 1s and 0s.' +
    'Decimal numbers are base 10 where as binary is base 2.' +
    'Everything in computers is stored as binary  eg. text, sound, videos.' +
    ' ' +
    'Bit - the smallest binary digit a computer can understand(1 or 0).' +
    ' ' +
    'Nibble - 4 bits (half a byte).' +
    ' ' +
    'Byte - 8 bits.';

export const binaryAdditionDescription = 
    'Adding numbers in binary is the same as in Decimal. ' +
    'You only need to learn 4 sums to be add binary numbers: ' +
    ' ' +
    '0 + 0 = 0, ' +
    '0 + 1 = 1, ' +
    '1 + 0 = 1 ' +
    'and ' +
    '1 + 1 = 10 ';

export const ASCIIDescription = 
    'Computers have to translate our alphabet into binary before they can understand it. ' +
    'They use a ststem called ASCII to do this. ' +
    ' ' +
    'ASCII stands for American Standard Code for Information Interchange. ' +
    'ASCII uses 7 bits to represent 128 different characters. ' +
    'To convert into ASCII by hand we have to use ASCII tables:';

export const BitmapsDescription =
    'Bitmaps are a way that computers store images. ' +
    'Bitmaps are made of Pixles and each pixel is asigned a binary value depending on its color. ' +
    'The number of bits used to asign a pixel is called the colour depth: ' +
    '1 bit = 2 colours, 4 bits = 16 colours.' + 
    ' ' +
    'To find the file size of a Bitmap yoo times the height in pixels by the width in pixels by the colour depth in bits.' 

export const MagnitudeDescription =
    'Magnitude means size.' + 
    'We give names to amounts of data so we can compare and measue them:' +
    'Bit - a singular binary digit ' +
    'Nibble - 4 bits ' +
    'Byte - 8 bits ' +
    'Kilobyte - 1000 bytes' +
    'Megabyte - 1000 kilobytes ' +
    'Gigabyte - 1000 Megabytes. ';

export const HUFFMANCodeDescription = 
    'We use HUFFMAN code to compact our data so it takes up less space. ' +
    'Hufman code still uses 1s and 0s' +
    'To Use HUFFMAN Code we draw a tree like this:';
