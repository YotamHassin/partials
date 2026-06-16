// https://www.freecodecamp.org/news/how-to-build-a-case-converter-tool/

// Case Converter Utility
export const caseTypes = ['capitalized', 'upper', 'lower', 'title', 
    'sentence', 'inverse', 'alternate'] as const;

export type CaseType = typeof caseTypes[number];
export const defaultCaseType: CaseType = caseTypes[0];
    

export const minorWords = ['a', 'an', 'the', 'and', 'but', 'or', 
    'for', 'nor', 'on', 'at', 'to', 'from', 'by'] as const;

export type MinorWord = typeof minorWords[number];

// Case conversion function
export const capitalizedRegExp: RegExp = /\b\w/g;

export const sentenceRegExp: RegExp = /(^\s*\w|[\.\!\?]\n*\s*\w)/g;


export const convertCase = (text: string, type: CaseType = caseTypes[0]) => {

    // Process the text
    switch (type) {
        case 'upper':
            text = text.toUpperCase();
            break;
        case 'lower':
            text = text.toLowerCase();
            break;
        case 'capitalized':
            text = text.toLowerCase().replace(capitalizedRegExp, c => c.toUpperCase());
            break;
        case 'title':
            text = text.toLowerCase().split(' ').map((word, index) => {
                if (index !== 0 && minorWords.includes(word as MinorWord)) return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
            break;
        case 'sentence':
            text = text.toLowerCase().replace(sentenceRegExp, c => c.toUpperCase());
            break;
        case 'inverse':
            text = text.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
            break;
        case 'alternate':
            text = text.toLowerCase().split('').map((c, i) => i % 2 === 0 ? c : c.toUpperCase()).join('');
            break;
    }

    return text;
}

// ============================================================================
// Text Stats Utility
export type TextStats = {
    charCount: number;
    
    //words: string[];
    wordCount: number;
    
    //sentences: string[];
    sentenceCount: number;
    
    //paragraphs: string[];
    paragraphCount: number;
};

export const sentencesSplitRegExp: RegExp = /[.!?]+/;
export const paragraphsSplitRegExp: RegExp = /\n+/;

export const updateStats = (text: string): TextStats => {
    
    const charCount = text.length;
    
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    const sentences = text.split(sentencesSplitRegExp)
        .filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    
    const paragraphs = text.split(paragraphsSplitRegExp)
        .filter(paragraph => paragraph.trim().length > 0);
    const paragraphCount = paragraphs.length;

    return {
        charCount,
        wordCount,
        sentenceCount,
        paragraphCount
    };
}

