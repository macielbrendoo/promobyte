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
    private int id;

    private boolean approvedStatus;
    private String product;
    private BigDecimal originalPrice;
    private BigDecimal actualPrice;
    private String url;
    private String promotionCode;
    private Date expirationDate;
    private Date createAt;
    private int ownerId;

    @OneToOne(cascade = CascadeType.ALL)
    private SubCategory subCategory;

    public Promotion() {
    }

    public Promotion(int id, SubCategory subCategory, boolean approvedStatus, String product, BigDecimal originalPrice, BigDecimal actualPrice, String url, String promotionCode, Date expirationDate, Date createAt, int ownerId) {
        this.id = id;
        this.subCategory = subCategory;
        this.approvedStatus = approvedStatus;
        this.product = product;
        this.originalPrice = originalPrice;
        this.actualPrice = actualPrice;
        this.url = url;
        this.promotionCode = promotionCode;
        this.expirationDate = expirationDate;
        this.createAt = createAt;
        this.ownerId = ownerId;
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

    public Date getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Date createAt) {
        this.createAt = createAt;
    }

    public int getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(int ownerId) {
        this.ownerId = ownerId;
    }
}
