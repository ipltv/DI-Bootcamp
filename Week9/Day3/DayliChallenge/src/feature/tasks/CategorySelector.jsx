// src/components/CategorySelector.js
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setSelectedCategory,
    addCategory,
    editCategory,
    deleteCategory,
    selectCategoriesState,
    selectSelectedCategoryState
} from './state/taskSlice.js';

function CategorySelector() {
    const categories = useSelector(selectCategoriesState);
    const selectedCategory = useSelector(selectSelectedCategoryState);
    const dispatch = useDispatch();

    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategoryName, setEditingCategoryName] = useState('');
    const [editingCategoryOriginalName, setEditingCategoryOriginalName] = useState(null);

    // Handle category selection
    const handleSelectCategory = useCallback((category) => {
        dispatch(setSelectedCategory({ category }));
    }, [dispatch]);

    // Handle adding a new category
    const handleAddCategory = useCallback(() => {
        if (newCategoryName.trim() && !categories.includes(newCategoryName.trim())) {
            dispatch(addCategory(newCategoryName.trim()));
            setNewCategoryName('');
        }
    }, [dispatch, newCategoryName, categories]);

    // Start editing a category
    const startEditCategory = useCallback((category) => {
        setEditingCategoryOriginalName(category);
        setEditingCategoryName(category);
    }, []);

    // Save edited category
    const saveEditCategory = useCallback(() => {
        if (editingCategoryName.trim() && editingCategoryOriginalName) {
            dispatch(editCategory({
                oldName: editingCategoryOriginalName,
                newName: editingCategoryName.trim()
            }));
            setEditingCategoryOriginalName(null);
            setEditingCategoryName('');
        }
    }, [dispatch, editingCategoryName, editingCategoryOriginalName]);

    // Cancel category editing
    const cancelEditCategory = useCallback(() => {
        setEditingCategoryOriginalName(null);
        setEditingCategoryName('');
    }, []);

    // Handle deleting a category
    const handleDeleteCategory = useCallback((category) => {
        if (window.confirm(`Are you sure you want to delete category "${category}"? Tasks assigned to this category will become unassigned.`)) {
            dispatch(deleteCategory({ category }));
            // If the deleted category was selected, reset selectedCategory to null or a default
            if (selectedCategory === category) {
                dispatch(setSelectedCategory({ category: null })); // Or categories[0] if you want a default
            }
        }
    }, [dispatch, selectedCategory]);

    return (
        <div className="category-selector">
            <h3>Categories</h3>
            <div>
                <select onChange={(e) => handleSelectCategory(e.target.value)} value={selectedCategory || ''}>
                    <option value="">Select a category</option> {/* Option for no category selected */}
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <h4>Manage Categories</h4>
                {categories.map((category) => (
                    <div key={category}>
                        {editingCategoryOriginalName === category ? (
                            <>
                                <input
                                    type="text"
                                    value={editingCategoryName}
                                    onChange={(e) => setEditingCategoryName(e.target.value)}
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter') saveEditCategory();
                                    }}
                                />
                                <button onClick={saveEditCategory}>Save</button>
                                <button onClick={cancelEditCategory}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <span>{category}</span>
                                <button onClick={() => startEditCategory(category)}>Edit</button>
                                <button onClick={() => handleDeleteCategory(category)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}

                <div>
                    <input
                        type="text"
                        placeholder="New category name"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') handleAddCategory();
                        }}
                    />
                    <button onClick={handleAddCategory}>Add Category</button>
                </div>
            </div>
        </div>
    );
}

export default CategorySelector;