import globFunc from './globFunc';

export default function WorkFriends() { 
    const category = 'workFriends';
    const categoryName = 'İŞ ARKADAŞLARI'
    const questions = globFunc({ category, categoryName });

    return questions;
}

