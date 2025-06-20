class SearchSuggestionSystem { 
    constructor(products) { 
        this.products = products.sort(); // sort lexicographically 
    } 
 
    getSuggestions(searchWord) { 
        let result = []; 
        let prefix = ""; 
        for (let char of searchWord) { 
            prefix += char; 
            let suggestions = []; 
            for (let product of this.products) { 
                if (product.startsWith(prefix)) { 
                    suggestions.push(product); 
                    if (suggestions.length === 3) break; 
                } 
            } 
            result.push(suggestions); 
        } 
        return result; 
    } 
} 