package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ci.mfpma.dq.entites.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	@Query("SELECT r FROM Role r WHERE r.id = 2 OR r.id = 3")
	List<Role> findAllByOrderByNomRoleAsc();
	
	Role findByNomRole(String nomRole);
}
