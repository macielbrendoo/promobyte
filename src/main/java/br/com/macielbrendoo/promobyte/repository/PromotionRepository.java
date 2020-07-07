package br.com.macielbrendoo.promobyte.repository;

import br.com.macielbrendoo.promobyte.model.Promotion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PromotionRepository extends CrudRepository<Promotion, Integer> {
    List<Promotion> findAllByApprovedStatus(boolean approvedStatus);
    Optional<Promotion> findOneByUrl(String url);
    Optional<Promotion> findOneById(int id);
    List<Promotion> findAllByOwnerId(int ownerId);

    @Query(value = "CALL deletaPromocao()", nativeQuery = true)
    List <Integer> deletaPromocao();
}
