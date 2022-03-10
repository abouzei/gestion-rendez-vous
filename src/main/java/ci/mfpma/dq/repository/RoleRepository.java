package ci.mfpma.dq.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ci.mfpma.dq.entites.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	List<Role> findAllByOrderByNomRoleAsc();
	
	Role findByNomRole(String nomRole);
}
