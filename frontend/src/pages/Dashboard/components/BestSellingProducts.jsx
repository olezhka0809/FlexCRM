import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdMoreHoriz } from "react-icons/md";


import "../../../styles/BestSellingProducts.scss";

// Product images
const productImages = {
  redDress: "/path/to/red-dress.jpg",
  leatherBelt: "/path/to/leather-belt.jpg",
  blueJacket: "/path/to/blue-jacket.jpg",
  yellowDress: "/path/to/yellow-dress.jpg",
  purpleJacket: "/path/to/purple-jacket.jpg"
};

const createProductData = (id, image, name, description, category, brand, originalPrice, discountedPrice, stock, rating, ratingCount, orders, sales) => {
  return { id, image, name, description, category, brand, originalPrice, discountedPrice, stock, rating, ratingCount, orders, sales };
};

const productRows = [
  createProductData(
    "#1", 
    productImages.redDress, 
    "Tops and skirt set for women", 
    "Women's exclusive set for special occasions", 
    "womans", 
    "richman", 
    "$21.00", 
    "$19.00", 
    30, 
    4.9, 
    16, 
    380, 
    "$38k"
  ),
  createProductData(
    "#2", 
    productImages.leatherBelt, 
    "Leather belt steve madden", 
    "Steve madden men's leather belt with metal buckle", 
    "mans", 
    "lubana", 
    "", 
    "$14.00", 
    23, 
    4.5, 
    38, 
    189, 
    "$9k"
  ),
  createProductData(
    "#3", 
    productImages.blueJacket, 
    "Existing product name", 
    "Nemo enim ipsam voluptatem quia voluptas", 
    "womans", 
    "ecstasy", 
    "$44.00", 
    "$33.00", 
    30, 
    4.1, 
    69, 
    380, 
    "$38k"
  ),
  createProductData(
    "#4", 
    productImages.yellowDress, 
    "Existing product name", 
    "Nemo enim ipsam voluptatem quia voluptas", 
    "kidz", 
    "ecstasy", 
    "", 
    "$33.00", 
    30, 
    4.4, 
    47, 
    380, 
    "$38k"
  ),
  createProductData(
    "#5", 
    productImages.purpleJacket, 
    "Existing product name", 
    "Nemo enim ipsam voluptatem quia voluptas", 
    "accessory", 
    "ecstasy", 
    "", 
    "$33.00", 
    30, 
    5.0, 
    47, 
    380, 
    "$38k"
  ),
];

const BestSellingProducts = (props) => {
    const [rowCount, setRowCount] = React.useState('12');
    const [category, setCategory] = React.useState('Mans');
    const [brand, setBrand] = React.useState('Ecstasy');
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState([]);
    
    const handleRowChange = (event) => {
        setRowCount(event.target.value);
    };
    
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            const newSelected = productRows.map((n) => n.id);
            setSelectedItems(newSelected);
        } else {
            setSelectedItems([]);
        }
    };
    
    const handleSelectItem = (id) => {
        const selectedIndex = selectedItems.indexOf(id);
        let newSelectedItems = [];
        
        if (selectedIndex === -1) {
            newSelectedItems = [...selectedItems, id];
        } else {
            newSelectedItems = selectedItems.filter(item => item !== id);
        }
        
        setSelectedItems(newSelectedItems);
    };
    
    const isSelected = (id) => selectedItems.indexOf(id) !== -1;
    
    return (
        <div className="products">
            <div className="products__container">
                <div className="products__header">
                    <h4 className="products__title">
                        Best Selling Products
                    </h4>
                    
                    {props.icon && (
                        <div className="products__title--icon">
                            <MdMoreHoriz/>
                        </div>
                    )}
                </div>
                
                <div className="products__filters">
                    <div className="products__filter-group">
                        <div className="products__filter-label">SHOW BY</div>
                        <FormControl sx={{ width: 273 }} className="products__filter-control lightBorder">
                            <Select
                                value={rowCount}
                                onChange={handleRowChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Show by' }}
                                sx={{ height: 43 }}
                            >
                                <MenuItem value="12">12 Row</MenuItem>
                                <MenuItem value="24">24 Row</MenuItem>
                                <MenuItem value="36">36 Row</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div className="products__filter-group">
                        <div className="products__filter-label">CATEGORY BY</div>
                        <FormControl sx={{ width: 273 }} className="products__filter-control lightBorder">
                            <Select
                                value={category}
                                onChange={handleCategoryChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Category by' }}
                                sx={{ height: 43 }}
                            >
                                <MenuItem value="Mans">Mans</MenuItem>
                                <MenuItem value="Womans">Womans</MenuItem>
                                <MenuItem value="Kidz">Kidz</MenuItem>
                                <MenuItem value="Accessory">Accessory</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div className="products__filter-group">
                        <div className="products__filter-label">BRAND BY</div>
                        <FormControl sx={{ width: 273 }} className="products__filter-control lightBorder">
                            <Select
                                value={brand}
                                onChange={handleBrandChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Brand by' }}
                                sx={{ height: 43 }}
                            >
                                <MenuItem value="Ecstasy">Ecstasy</MenuItem>
                                <MenuItem value="Richman">Richman</MenuItem>
                                <MenuItem value="Lubana">Lubana</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                    <div className="products__filter-group">
                        <div className="products__filter-label">SEARCH BY</div>
                        <TextField
                            placeholder="id / name / category / brand"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            sx={{ 
                                width: 273, 
                                '& .MuiOutlinedInput-root': { 
                                    height: 43, 
                                    backgroundColor: '#f0f0f0',
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                }
                            }}
                            className="products__filter-search"
                        />
                    </div>
                </div>
                
                <div className="products__table">
                    <TableContainer>
                        <Table aria-label="product table">
                            <TableHead>
                                <TableRow className="products__table-header">
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            indeterminate={selectedItems.length > 0 && selectedItems.length < productRows.length}
                                            checked={productRows.length > 0 && selectedItems.length === productRows.length}
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>
                                    <TableCell className="products__table-head-cell">UID</TableCell>
                                    <TableCell className="products__table-head-cell">PRODUCT</TableCell>
                                    <TableCell className="products__table-head-cell">CATEGORY</TableCell>
                                    <TableCell className="products__table-head-cell">BRAND</TableCell>
                                    <TableCell className="products__table-head-cell">PRICE</TableCell>
                                    <TableCell className="products__table-head-cell">STOCK</TableCell>
                                    <TableCell className="products__table-head-cell">RATING</TableCell>
                                    <TableCell className="products__table-head-cell">ORDER</TableCell>
                                    <TableCell className="products__table-head-cell">SALES</TableCell>
                                    <TableCell className="products__table-head-cell">ACTION</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productRows.map((row) => {
                                    const isItemSelected = isSelected(row.id);
                                    
                                    return (
                                        <TableRow
                                            key={row.id}
                                            selected={isItemSelected}
                                            className="products__table-row"
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    onChange={() => handleSelectItem(row.id)}
                                                />
                                            </TableCell>
                                            <TableCell className="products__table-cell">{row.id}</TableCell>
                                            <TableCell className="products__table-cell products__product-cell">
                                                <div className="products__product">
                                                    <div className="products__product-image">
                                                        {/* Replace with actual image component */}
                                                        <div className="products__product-image-placeholder"></div>
                                                    </div>
                                                    <div className="products__product-info">
                                                        <div className="products__product-name">{row.name}</div>
                                                        <div className="products__product-description">{row.description}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="products__table-cell">{row.category}</TableCell>
                                            <TableCell className="products__table-cell">{row.brand}</TableCell>
                                            <TableCell className="products__table-cell products__price-cell">
                                                {row.originalPrice && <div className="products__price-original">{row.originalPrice}</div>}
                                                <div className="products__price-discounted">{row.discountedPrice}</div>
                                            </TableCell>
                                            <TableCell className="products__table-cell">{row.stock}</TableCell>
                                            <TableCell className="products__table-cell">
                                                <div className="products__rating">
                                                    <StarIcon className="products__rating-star" />
                                                    <span>{row.rating} </span>
                                                    <span className="products__rating-count">({row.ratingCount})</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="products__table-cell">{row.orders}</TableCell>
                                            <TableCell className="products__table-cell">{row.sales}</TableCell>
                                            <TableCell className="products__table-cell products__actions-cell">
                                                <div className="products__actions">
                                                    <IconButton className="products__action-btn products__action-view">
                                                        <VisibilityIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton className="products__action-btn products__action-edit">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton className="products__action-btn products__action-delete">
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                
                <div className="products__pagination">
                    {/* Pagination component goes here */}
                </div>
            </div>
        </div>
    );
};

export default BestSellingProducts;