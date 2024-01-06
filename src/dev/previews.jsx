import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Products from "../components/Products/Products";
import SingleProduct from "../components/Products/SingleProduct";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Products">
                <Products/>
            </ComponentPreview>
            <ComponentPreview path="/SingleProduct">
                <SingleProduct/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;