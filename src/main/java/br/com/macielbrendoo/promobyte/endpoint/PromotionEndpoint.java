package br.com.macielbrendoo.promobyte.endpoint;

import br.com.macielbrendoo.promobyte.error.PromotionAlreadyExistsException;
import br.com.macielbrendoo.promobyte.model.Promotion;
import br.com.macielbrendoo.promobyte.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotEmpty;

public class PromotionEndpoint {
    private final PromotionRepository promotionRepository;

    @Autowired
    public PromotionEndpoint(PromotionRepository promotionRepository) {
        this.promotionRepository = promotionRepository;
    }

    @GetMapping(path = "/list")
    public ResponseEntity<?> listPromotionByApprovedStatus(@RequestBody @NotEmpty boolean approvedStatus) {
        return new ResponseEntity<>(promotionRepository.findAllByApprovedStatus(approvedStatus), HttpStatus.OK);
    }

    @GetMapping(path = "/promotion/{id}")
    public ResponseEntity<?> getPromotionByID(@PathVariable int id){
        return new ResponseEntity<>(promotionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(path = "/resgister")
    public ResponseEntity<?> createPromotion(@RequestBody @NotEmpty Promotion promotion) {
        if(promotionRepository.findOneByUrl(promotion.getUrl()).isPresent()){
            throw new PromotionAlreadyExistsException("Promoção já existe");
        }
        return new ResponseEntity<>(promotionRepository.save(promotion), HttpStatus.OK);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<?> updatePromotion(@RequestBody Promotion promotion){
        return new ResponseEntity<>(promotionRepository.save(promotion), HttpStatus.OK);
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<?> deletePromotion(@PathVariable int id){
        promotionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}