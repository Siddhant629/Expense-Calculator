import React, { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin:30px 0 10px;
pading: 10px 22px;
font-size: 18px;
width: 100%:
gap: 10px;
font-weight: bold;
& input{
  padding: 10px 12px;
  border-radius: 12px;
  background: #e6e8e9;
  outline: none;
  width: 100%;
}
    
`;
const Cell = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
margin-top:5px;
pading: 10px 15px;
border-radius: 2px;
align-items: center;
font-weight: normal;
font-size: 20px
border-right: 4px solid ${(props)=>(props.isExpense?"red":"green")}
`;

const TransactionCell =(props)=>{
  return(<Cell isExpense={props.payload?.type === "EXPENSE"}>
<span>
  {props.payload.desc}
</span>
<span>
  {props.payload.amount}
</span>

  </Cell>)
}

const TransactionComponent = (props) => {
  const [searchText,updateSearchText]= useState(props.transactions);
  const [filteredTransaction,updateTxn]= useState(props.transactions);

  const filterData =()=>{
    if(!searchText || !searchText.trim().length){
      updateTxn(props.transactions);
      return;
    }
    let txn= [...props.transactions];
    txn=txn.filter((payload)=> payload.desc.toLowerCase().includes(searchText.toLowerCase().trim()));  
    updateTxn(txn)

  };
 
 


  return (
    <Container>Transaction
      <input placeholder='search' value={searchText} onChange={(e)=>updateSearchText(e.target.value)}/>
      {props.transactions?.length ? props.transactions.map((payload)=>(
        <TransactionCell payload={payload}></TransactionCell>

      )):""}
    </Container>
  )
}

export default TransactionComponent