package br.com.macielbrendoo.promobyte.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.math.BigDecimal;
import java.util.Date;

@EnableAutoConfiguration
@Entity
public class Promotion {
    @Id
    int id;

    @OneToOne(cascade = CascadeType.ALL)
    SubCategory subCategory;

    boolean approvedStatus;
    String product;
    BigDecimal originalPrice;
    BigDecimal actualPrice;
    String url;
    String promotionCode;
    Date expirationDate;

    public Promotion() {
    }

    public Promotion(int id, SubCategory subCategory, boolean approvedStatus, String product, BigDecimal originalPrice, BigDecimal actualPrice, String url, String promotionCode, Date expirationDate) {
        this.id = id;
        this.subCategory = subCategory;
        this.approvedStatus = approvedStatus;
        this.product = product;
        this.originalPrice = originalPrice;
        this.actualPrice = actualPrice;
        this.url = url;
        this.promotionCode = promotionCode;
        this.expirationDate = expirationDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }

    public boolean isApprovedStatus() {
        return approvedStatus;
    }

    public void setApprovedStatus(boolean approvedStatus) {
        this.approvedStatus = approvedStatus;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public BigDecimal getOriginalPrice() {
        return originalPrice;
    }

    public void setOriginalPrice(BigDecimal originalPrice) {
        this.originalPrice = originalPrice;
    }

    public BigDecimal getActualPrice() {
        return actualPrice;
    }

    public void setActualPrice(BigDecimal actualPrice) {
        this.actualPrice = actualPrice;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getPromotionCode() {
        return promotionCode;
    }

    public void setPromotionCode(String promotionCode) {
        this.promotionCode = promotionCode;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }
}
