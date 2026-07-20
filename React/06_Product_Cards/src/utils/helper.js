const sortProducts = (sortBy, filteredProducts) => {
    const sortedProducts = [...filteredProducts]
    switch (sortBy) {
        case 'Price: Low → High':
            return sortedProducts.sort(
                (product1, product2) => product1.price - product2.price,
            );

        case 'Price: High → Low':
            return sortedProducts.sort(
                (product1, product2) => product2.price - product1.price,
            );


        case 'Name: A → Z':
            return sortedProducts.sort(
                (product1, product2) => product1.name.localeCompare(product2.name)
            );


        case 'Name: Z → A':
            return sortedProducts.sort(
                (product1, product2) => product2.name.localeCompare(product1.name)
            );


        case 'Rating: High → Low':
            return sortedProducts.sort((product1, product2) => (product2.rating - product1.rating))


        default:
            return sortedProducts

    }
}

export default sortProducts
