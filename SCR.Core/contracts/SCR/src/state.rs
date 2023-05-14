use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use cosmwasm_schema::cw_serde;
use cosmwasm_std::Addr;
use cw_storage_plus::{Item};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub owner: Addr,
    pub users: Vec<User>,
}

#[cw_serde]
pub struct User {
    user_id: String,
    name: String,
    dob: String,
    address: String,
    email: String,
    password: String,

}

#[cw_serde]
pub struct TermsConditions {
    user_id: String,
    party_A: vec<String>,
    party_B: vec<String>,
    dob: String,
    address: String,
    email: String,
    password: String,
}

#[cw_serde]
pub struct Procedure {
    user_id: String,
    name: String,
    dob: String,
    address: String,
    email: String,
    password: String,
}

pub const STATE: Item<State> = Item::new("state");
