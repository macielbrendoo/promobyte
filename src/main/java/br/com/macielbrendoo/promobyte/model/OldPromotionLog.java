package br.com.macielbrendoo.promobyte.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@EnableAutoConfiguration
@Entity
public class OldPromotionLog {
    @Id
    @GeneratedValue
    private int id;

    private int oldId;

    private boolean approvedStatus;
    private String product;
    private BigDecimal originalPrice;
    private BigDecimal actualPrice;
    private String url;
    private String promotionCode;
    private Date expirationDate;
    private Date createAt;
    private int ownerId;

    @OneToOne(cascade = CascadeType.MERGE)
    private SubCategory subCategory;

    public OldPromotionLog() {
    }

    public OldPromotionLog(int oldId, boolean approvedStatus, String product, BigDecimal originalPrice, BigDecimal actualPrice, String url, String promotionCode, Date expirationDate, Date createAt, int ownerId, SubCategory subCategory) {
        this.oldId = oldId;
        this.approvedStatus = approvedStatus;
        this.product = product;
        this.originalPrice = originalPrice;
        this.actualPrice = actualPrice;
        this.url = url;
        this.promotionCode = promotionCode;
        this.expirationDate = expirationDate;
        this.createAt = createAt;
        this.ownerId = ownerId;
        this.subCategory = subCategory;
    }

    public int getOldId() {
        return oldId;
    }

    public void setOldId(int oldId) {
        this.oldId = oldId;
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
