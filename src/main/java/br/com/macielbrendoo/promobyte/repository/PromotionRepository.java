package br.com.macielbrendoo.promobyte.repository;

import br.com.macielbrendoo.promobyte.model.Promotion;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PromotionRepository extends CrudRepository<Promotion, Integer> {
    List<Promotion> findAllByApprovedStatus(boolean approvedStatus);
    Optional<Promotion> findOneByUrl(String url);
    List<Promotion> findAllByOwnerId(int ownerId);
}
