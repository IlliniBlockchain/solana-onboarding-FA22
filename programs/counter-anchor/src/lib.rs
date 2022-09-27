use anchor_lang::prelude::*;

declare_id!("96QBNcuHuQv1x1q1feJNFDckf6yNEYHcVdkh8QFvjT3i");

#[program]
pub mod counter_anchor {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        // write your intialize ix here
        Ok(())
    }

    pub fn increase(ctx: Context<Increase>, increment: u64) -> ProgramResult {
        // write your increase ix here
        Ok(())
    }

    pub fn decrease(ctx: Context<Decrease>, decrement: u64) -> ProgramResult {
        // write your decrease ix here
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // pass in the accounts needed for initialize here
}

#[derive(Accounts)]
pub struct Increase<'info> {
    // pass in the accounts needed for increase here
}

#[derive(Accounts)]
pub struct Decrease<'info> {
    // pass in the accounts needed for decrease here
}

#[account]
pub struct Counter {
    pub count: u64,
}
