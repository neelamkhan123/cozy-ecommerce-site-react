import Item from "./Item";

import classes from "./ItemList.module.css";

const ItemList = (props) => {
  return (
    <>
      <ul className={classes.list}>
        {props.products.map((product) => (
          <Item
            key={product.id}
            product={product}
            img={product.img}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList;
