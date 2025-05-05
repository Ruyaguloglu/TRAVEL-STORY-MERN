import ADD_STORY_IMG from '../assets/images/add-story.svg'
import NO_SEARCH_DATA_IMG from '../assets/images/no-search-data.svg'
import NO_FILTER_DATA_IMG from '../assets/images/no-filter-data.svg'




//Girilen e posta adresinin geçerli olup olmadığını kontrol eder.
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

//Verilen isimden baş harfleri(initials) çıkarır.
export const getInitials = (name) => {
    if (!name) return "";

    const words =name.split(" ");//Kullanıcının adını boşluklardan ayırarak bir diziye çevirir.
    let initials ="";

    for (let i = 0; i< Math.min(words.length, 2); i++)  {
        initials += words[i][0];
    }

    return initials.toUpperCase();
};

export const getEmptyCardMessage = (filterType) => {
    switch (filterType) {
      case "search":
        return `Oops! No stories found matching your search.`;
      case "date":
        return `No stories found in the given date range `;
      default:
        return `Start creating your first Travel Story ! Click the 'Add' button to jot
                    down your thoughts, ideas, and MdOutlineAmpStories. Let's get started!`;

    }
};

export const getEmptyCardImg = (filterType) => {
    switch (filterType) {
        case "search":
            return NO_SEARCH_DATA_IMG;
        case "date":
            return NO_FILTER_DATA_IMG;
        default:
            return ADD_STORY_IMG;
    }
};





//KODUN AÇIKLAMASI:
//Bu fonksiyon, bir kullanıcı profili oluştururken isim yerine baş harflerin gösterilmesi gereken yerlerde kullanılır. Örneğin, bir profil resminin yerine "JD" gibi harfler göstermek için.