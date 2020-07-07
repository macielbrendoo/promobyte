package br.com.macielbrendoo.promobyte.endpoint;

import br.com.macielbrendoo.promobyte.error.PromotionAlreadyExistsException;
import br.com.macielbrendoo.promobyte.model.Logs;
import br.com.macielbrendoo.promobyte.model.NewPromotionLog;
import br.com.macielbrendoo.promobyte.model.OldPromotionLog;
import br.com.macielbrendoo.promobyte.model.Promotion;
import br.com.macielbrendoo.promobyte.repository.LogRepository;
import br.com.macielbrendoo.promobyte.repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Query;
import javax.persistence.StoredProcedureQuery;
import javax.validation.constraints.NotEmpty;

@RestController
@RequestMapping("promo")
public class PromotionEndpoint {
    private final PromotionRepository promotionRepository;
    private final LogRepository logRepository;

    @Autowired
    public PromotionEndpoint(PromotionRepository promotionRepository, LogRepository logRepository) {
        this.promotionRepository = promotionRepository;
        this.logRepository = logRepository;
    }

    @CrossOrigin
    @GetMapping(path = "/list")
    public ResponseEntity<?> listPromotionByApprovedStatus(@RequestParam(required = false, defaultValue = "true") boolean approvedStatus, @RequestParam(required = false, defaultValue = "0") int ownerId) {
        if(ownerId > 0) {
            return new ResponseEntity<>(promotionRepository.findAllByOwnerId(ownerId), HttpStatus.OK);
        }else {
            return new ResponseEntity<>(promotionRepository.findAllByApprovedStatus(approvedStatus), HttpStatus.OK);
        }
    }

    @CrossOrigin
    @GetMapping(path = "/{id}")
    public ResponseEntity<?> getPromotionByID(@PathVariable int id){
        return new ResponseEntity<>(promotionRepository.findById(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(path = "/create")
    public ResponseEntity<?> createPromotion(@RequestBody @NotEmpty Promotion promotion) {
        if(promotionRepository.findOneByUrl(promotion.getUrl()).isPresent()){
            throw new PromotionAlreadyExistsException("Promoção já existe");
        }
        return new ResponseEntity<>(promotionRepository.save(promotion), HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping(path = "/update")
    public ResponseEntity<?> updatePromotion(@RequestBody Promotion promotion){
        saveLog(promotion.getId(), promotion, "UPDATE");

        return new ResponseEntity<>(promotionRepository.save(promotion), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deletePromotion(@PathVariable int id){
        saveLog(id, null, "DELETE");

        promotionRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path = "/cleanPromotions")
    public ResponseEntity<?> cleanPromotion() {
        promotionRepository.deletaPromocao();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private void saveLog(int id, Promotion promotion, String operation) {
        Logs log = new Logs();
        log.setOperation(operation);

        Promotion oldPromotion = promotionRepository.findById(id).get();
        log.setOldPromotionLog(new OldPromotionLog(oldPromotion.getId(), oldPromotion.isApprovedStatus(), oldPromotion.getProduct(), oldPromotion.getOriginalPrice(), oldPromotion.getActualPrice(), oldPromotion.getUrl(), oldPromotion.getPromotionCode(), oldPromotion.getExpirationDate(), oldPromotion.getCreateAt(), oldPromotion.getOwnerId(), oldPromotion.getSubCategory()));

        if("UPDATE".equals(operation)) {
            log.setNewPromotionLog(new NewPromotionLog(promotion.getId(), promotion.isApprovedStatus(), promotion.getProduct(), promotion.getOriginalPrice(), promotion.getActualPrice(), promotion.getUrl(), promotion.getPromotionCode(), promotion.getExpirationDate(), promotion.getCreateAt(), promotion.getOwnerId(), promotion.getSubCategory()));
        }

        logRepository.save(log);
    }
}