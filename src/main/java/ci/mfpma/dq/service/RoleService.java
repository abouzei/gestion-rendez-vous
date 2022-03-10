package ci.mfpma.dq.service;


import java.util.List;

import ci.mfpma.dq.entites.Role;

public interface RoleService {
	
	List<Role> getAll();
	
	void save(Role role);
	
	Role getById(Long roleID);
	
	void deleteById(Role role);
	
	List<Role> findAllByOrderByNomRoleAsc();
	
	
	Role findByNomRole(String nomRole);
}
