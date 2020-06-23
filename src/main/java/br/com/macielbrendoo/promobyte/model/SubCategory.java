package br.com.macielbrendoo.promobyte.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.Entity;
import javax.persistence.Id;

@EnableAutoConfiguration
@Entity
public class SubCategory {
    @Id
    int id;
    int categoryId;
    String subCategory;

    public SubCategory() {
    }

    public SubCategory(int id, int categoryId, String subCategory) {
        this.id = id;
        this.categoryId = categoryId;
        this.subCategory = subCategory;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }
}
