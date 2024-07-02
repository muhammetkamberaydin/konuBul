import globFunc from './globFunc';

export default function LongLove() { 
    const category = 'longLove';
    const categoryName = 'İLİŞKİLER'
    const questions = globFunc({ category, categoryName });

    return questions;
}

