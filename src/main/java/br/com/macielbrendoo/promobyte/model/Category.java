package br.com.macielbrendoo.promobyte.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@EnableAutoConfiguration
@Entity
public class Category {
    @Id
    int id;
    String category;

    @OneToOne
    SubCategory subCategory;

    public Category() {
    }

    public Category(int id, String category, SubCategory subCategory) {
        this.id = id;
        this.category = category;
        this.subCategory = subCategory;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }
}
