package br.com.macielbrendoo.promobyte.model;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

import javax.persistence.*;


@EnableAutoConfiguration
@Entity
public class Logs {
    @Id
    @GeneratedValue
    int id;

    private String operation;
    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REMOVE})
    private OldPromotionLog oldPromotionLog;

    @OneToOne(cascade={CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REMOVE})
    private NewPromotionLog newPromotionLog;

    public Logs() {
    }

    public Logs(int id, String operation, OldPromotionLog oldPromotionLog, NewPromotionLog newPromotionLog) {
        this.id = id;
        this.operation = operation;
        this.oldPromotionLog = oldPromotionLog;
        this.newPromotionLog = newPromotionLog;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public OldPromotionLog getOldPromotionLog() {
        return oldPromotionLog;
    }

    public void setOldPromotionLog(OldPromotionLog oldPromotionLog) {
        this.oldPromotionLog = oldPromotionLog;
    }

    public NewPromotionLog getNewPromotionLog() {
        return newPromotionLog;
    }

    public void setNewPromotionLog(NewPromotionLog newPromotionLog) {
        this.newPromotionLog = newPromotionLog;
    }
}
