use cosmwasm_schema::{cw_serde, QueryResponses};
use crate::state::User;
#[cw_serde]
pub struct InstantiateMsg {
    pub user: User,
}

#[cw_serde]
pub enum ExecuteMsg {
    UpdateProfile {name: String, dob: String},
    Reset { count: i32 },
}

#[cw_serde]
#[derive(QueryResponses)]
pub enum QueryMsg {
    // GetCount returns the current count as a json-encoded number
    #[returns(GetCountResponse)]
    GetCount {},
}

// We define a custom struct for each query response
#[cw_serde]
pub struct GetCountResponse {
    pub count: i32,
}
