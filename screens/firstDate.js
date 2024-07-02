import globFunc from './globFunc';

export default function FirstDate() { 
    const category = 'firstDate';
    const categoryName = 'İLK BULUŞMA'
    const questions = globFunc({ category, categoryName });

    return questions;
}

