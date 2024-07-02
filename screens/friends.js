import globFunc from './globFunc';

export default function Friends() { 
    const category = 'friends';
    const categoryName = 'ARKADAŞLAR'
    const questions = globFunc({ category, categoryName });
    return questions;
}
