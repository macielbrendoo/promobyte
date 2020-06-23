package br.com.macielbrendoo.promobyte.error;


public class PromotionAlreadyExistsException extends RuntimeException {
    public PromotionAlreadyExistsException(String message) {
        super(message);
    }
}
