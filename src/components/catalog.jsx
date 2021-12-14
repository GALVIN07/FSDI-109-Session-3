import { useEffect, useState } from "react";
import "./catalog.css";
import Item from "./item";
import DataService from "../services/dataService";

const Catalog = () => {
    const [itemList, setItemList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemsToDisplay, setItemsToDisplay] = useState([]);

    const loadCatalog = ( ) => {
        // create an instance of the service
        // call the method
        let service = new DataService();
        let catalog = service.getCatalog();
        setItemList(catalog);
        setItemsToDisplay(catalog);

        let cats = [];
        for(let i = 0; i < catalog.length; i++){
            let prod = catalog[i];
            
            if(!cats.includes(prod.category)){
                cats.push(prod.category);
            }
        }
        
        setCategories(cats);
        
    };
    const handleFilter= (cat) => {
        
        setItemsToDisplay([]);

        let results = [];
        for(let i=0; i< itemList.length; i++){
            let prod = itemList[i];
            if(prod.category === cat){
                results.push(prod);
            }
        }
        setItemsToDisplay(results);

    };
    const resetFilter = () => {
        setItemsToDisplay(itemList);
    };
    

    useEffect(() => {
        loadCatalog();
    }, []);

    return (
        <div className="catalog">
            <h1>Our Fabulous Catalog</h1>
            <h3>Currently Have {itemList.length} products</h3>
            
            <div className="filters">
                <button onClick={resetFilter} className="btn btn-sm btn-dark">
                    All
                </button>
              {categories.map((cat) => (
                <button onClick={ () => {handleFilter(cat)} } className="btn btn-sm btn-info" >
                  {cat}
                </button>))}
            </div>
            
            {itemsToDisplay.map((prod) => <Item key={prod._id} data={prod}></Item>)}

        </div>
    );
};

export default Catalog;

