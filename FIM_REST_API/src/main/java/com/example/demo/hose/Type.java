package com.example.demo.hose;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "hose_type")
public class Type {

    @Id
    @GeneratedValue
    @Column(name = "hose_type_id")
    private Integer id;
    private float diameter;
    private Integer length;

    @OneToMany
    @JsonIgnore
    private List<Hose> hoses;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public float getDiameter() {
        return diameter;
    }

    public void setDiameter(float diameter) {
        this.diameter = diameter;
    }

    public Integer getLength() {
        return length;
    }

    public void setLength(Integer length) {
        this.length = length;
    }

    public List<Hose> getHoses() {
        return hoses;
    }

    public void setHoses(List<Hose> hoses) {
        this.hoses = hoses;
    }

    @Override
    public String toString() {
        return "Type{" +
                "hose_type_id=" + id +
                ", diameter=" + diameter +
                ", length=" + length +
                '}';
    }
}
